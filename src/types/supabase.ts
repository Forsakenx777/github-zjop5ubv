export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          id: string;
          email: string;
          role: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: string;
          created_at?: string;
        };
      };
      tournaments: {
        Row: {
          id: string;
          title: string;
          game: string;
          prize: string;
          date: string;
          registration_open: boolean;
          image_url: string | null;
          google_form_link: string | null;
          venue: string;
          organizer: string;
          description: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          game: string;
          prize: string;
          date: string;
          registration_open?: boolean;
          image_url?: string | null;
          google_form_link?: string | null;
          venue: string;
          organizer: string;
          description: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          game?: string;
          prize?: string;
          date?: string;
          registration_open?: boolean;
          image_url?: string | null;
          google_form_link?: string | null;
          venue?: string;
          organizer?: string;
          description?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}