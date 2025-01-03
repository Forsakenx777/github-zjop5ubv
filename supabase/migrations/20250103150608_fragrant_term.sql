/*
  # Enhanced Schema for ESLN Backend

  1. New Tables
    - `profiles` - Extended user profiles
    - `teams` - Team management
    - `tournament_participants` - Tournament participation tracking
    - `tournament_matches` - Match results and brackets
    
  2. Security
    - RLS policies for all tables
    - Role-based access control
    - Team member management policies
    
  3. Enhancements
    - Improved tournament management
    - Team functionality
    - Match tracking system
*/

-- Profiles table for extended user information
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  game_ids text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Teams table for organizing players
CREATE TABLE IF NOT EXISTS teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  logo_url text,
  captain_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Team members junction table
CREATE TABLE IF NOT EXISTS team_members (
  team_id uuid REFERENCES teams(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL DEFAULT 'member',
  joined_at timestamptz DEFAULT now(),
  PRIMARY KEY (team_id, user_id)
);

-- Tournament participants tracking
CREATE TABLE IF NOT EXISTS tournament_participants (
  tournament_id uuid REFERENCES tournaments(id) ON DELETE CASCADE,
  team_id uuid REFERENCES teams(id) ON DELETE CASCADE,
  registered_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  PRIMARY KEY (tournament_id, team_id)
);

-- Tournament matches for brackets
CREATE TABLE IF NOT EXISTS tournament_matches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tournament_id uuid REFERENCES tournaments(id) ON DELETE CASCADE,
  round_number integer NOT NULL,
  match_number integer NOT NULL,
  team1_id uuid REFERENCES teams(id),
  team2_id uuid REFERENCES teams(id),
  winner_id uuid REFERENCES teams(id),
  score_team1 integer,
  score_team2 integer,
  match_date timestamptz,
  status text DEFAULT 'scheduled',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_matches ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Teams policies
CREATE POLICY "Anyone can view teams"
  ON teams FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Team captains can update their teams"
  ON teams FOR UPDATE
  TO authenticated
  USING (auth.uid() = captain_id)
  WITH CHECK (auth.uid() = captain_id);

-- Team members policies
CREATE POLICY "Team members visible to authenticated users"
  ON team_members FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Team captains can manage members"
  ON team_members FOR ALL
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT captain_id FROM teams WHERE id = team_members.team_id
    )
  );

-- Tournament participants policies
CREATE POLICY "Anyone can view participants"
  ON tournament_participants FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Team captains can register teams"
  ON tournament_participants FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() IN (
      SELECT captain_id FROM teams WHERE id = tournament_participants.team_id
    )
  );

-- Tournament matches policies
CREATE POLICY "Anyone can view matches"
  ON tournament_matches FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only admins can manage matches"
  ON tournament_matches FOR ALL
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT id FROM admins
    )
  );

-- Functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, username, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'username',
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ language plpgsql security definer;

-- Trigger for new user profiles
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE handle_new_user();

-- Update triggers for timestamps
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON teams
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON tournament_matches
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();