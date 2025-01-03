/*
  # Admin Panel Schema

  1. New Tables
    - `admins`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `role` (text)
      - `created_at` (timestamp)
    - `tournaments`
      - `id` (uuid, primary key)
      - `title` (text)
      - `game` (text)
      - `prize` (text)
      - `date` (text)
      - `registration_open` (boolean)
      - `image_url` (text)
      - `google_form_link` (text)
      - `venue` (text)
      - `organizer` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `tournament_rules`
      - `id` (uuid, primary key)
      - `tournament_id` (uuid, foreign key)
      - `rule` (text)
    - `tournament_schedule`
      - `id` (uuid, primary key)
      - `tournament_id` (uuid, foreign key)
      - `phase` (text)
      - `date` (text)
      - `details` (text)
    - `tournament_requirements`
      - `id` (uuid, primary key)
      - `tournament_id` (uuid, foreign key)
      - `requirement` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create tables
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'editor',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tournaments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  game text NOT NULL,
  prize text NOT NULL,
  date text NOT NULL,
  registration_open boolean DEFAULT false,
  image_url text,
  google_form_link text,
  venue text NOT NULL,
  organizer text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tournament_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tournament_id uuid REFERENCES tournaments(id) ON DELETE CASCADE,
  rule text NOT NULL
);

CREATE TABLE IF NOT EXISTS tournament_schedule (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tournament_id uuid REFERENCES tournaments(id) ON DELETE CASCADE,
  phase text NOT NULL,
  date text NOT NULL,
  details text NOT NULL
);

CREATE TABLE IF NOT EXISTS tournament_requirements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tournament_id uuid REFERENCES tournaments(id) ON DELETE CASCADE,
  requirement text NOT NULL
);

-- Enable Row Level Security
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_schedule ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_requirements ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can manage tournaments"
  ON tournaments
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT id FROM admins));

CREATE POLICY "Admins can manage tournament rules"
  ON tournament_rules
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT id FROM admins));

CREATE POLICY "Admins can manage tournament schedule"
  ON tournament_schedule
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT id FROM admins));

CREATE POLICY "Admins can manage tournament requirements"
  ON tournament_requirements
  TO authenticated
  USING (auth.uid() IN (SELECT id FROM admins))
  WITH CHECK (auth.uid() IN (SELECT id FROM admins));

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_tournaments_updated_at
  BEFORE UPDATE ON tournaments
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();