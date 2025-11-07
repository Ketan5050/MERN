/*
  # COEK College Website Database Schema

  ## Overview
  Creates comprehensive database schema for COEK college website with all required modules.

  ## New Tables
  
  ### 1. `news` - News articles and announcements
    - `id` (uuid, primary key)
    - `title` (text, required)
    - `content` (text, required)
    - `excerpt` (text)
    - `image_url` (text)
    - `category` (text)
    - `published_date` (timestamptz)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ### 2. `events` - College events and calendar
    - `id` (uuid, primary key)
    - `title` (text, required)
    - `description` (text)
    - `event_date` (timestamptz, required)
    - `end_date` (timestamptz)
    - `location` (text)
    - `image_url` (text)
    - `category` (text)
    - `created_at` (timestamptz)
    - `updated_at` (timestamptz)

  ### 3. `gallery_images` - Image gallery
    - `id` (uuid, primary key)
    - `title` (text)
    - `description` (text)
    - `image_url` (text, required)
    - `category` (text)
    - `uploaded_at` (timestamptz)

  ### 4. `contact_submissions` - Contact form submissions
    - `id` (uuid, primary key)
    - `name` (text, required)
    - `email` (text, required)
    - `phone` (text)
    - `subject` (text)
    - `message` (text, required)
    - `status` (text, default: 'new')
    - `submitted_at` (timestamptz)

  ### 5. `departments` - Academic departments
    - `id` (uuid, primary key)
    - `name` (text, required)
    - `description` (text)
    - `head_of_department` (text)
    - `image_url` (text)
    - `programs` (text[])
    - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Public read access for public-facing content (news, events, gallery, departments)
  - Restricted write access (admin only)
  - Contact submissions are write-only for public users

  ## Notes
  1. All tables use UUID primary keys for security
  2. Timestamps for audit trails
  3. RLS policies ensure data security
  4. Public can view content but not modify
  5. Contact form submissions are stored securely
*/

-- News table
CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  image_url text,
  category text DEFAULT 'general',
  published_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  USING (true);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  event_date timestamptz NOT NULL,
  end_date timestamptz,
  location text,
  image_url text,
  category text DEFAULT 'general',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

-- Gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  description text,
  image_url text NOT NULL,
  category text DEFAULT 'campus',
  uploaded_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  USING (true);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new',
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- Departments table
CREATE TABLE IF NOT EXISTS departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  head_of_department text,
  image_url text,
  programs text[],
  created_at timestamptz DEFAULT now()
);

ALTER TABLE departments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view departments"
  ON departments FOR SELECT
  USING (true);

-- Insert sample data for demonstration

-- Sample news articles
INSERT INTO news (title, content, excerpt, category, image_url) VALUES
('Welcome to D.Y. Patil College Academic Year 2025', 'We are excited to welcome all students to the new academic year at College of Engineering. This year promises to be filled with opportunities for growth, learning, and innovation.', 'New academic year begins with exciting opportunities', 'announcement', 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800'),
('D.Y. Patil College Students Win National Hackathon', 'Students from the Computer Science department secured first place at the National Level Hackathon, showcasing innovative solutions in artificial intelligence and machine learning.', 'CS students bring home first prize from national competition', 'achievement', 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'),
('New Research Lab Inaugurated', 'State-of-the-art research laboratory for robotics and automation has been inaugurated, equipped with cutting-edge technology to support advanced research projects.', 'Modern research facilities now available for students', 'infrastructure', 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Sample events
INSERT INTO events (title, description, event_date, location, category, image_url) VALUES
('Annual Technical Festival - TechFest 2025', 'Three-day technical festival featuring coding competitions, robotics challenges, paper presentations, and workshops by industry experts.', '2025-12-15 09:00:00+00', 'Main Auditorium', 'festival', 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Industry Expert Lecture Series', 'Weekly lecture series featuring industry leaders sharing insights on emerging technologies and career opportunities.', '2025-11-20 14:00:00+00', 'Seminar Hall', 'workshop', 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Campus Placement Drive', 'Leading tech companies visiting campus for recruitment. Students are encouraged to participate and prepare their resumes.', '2025-11-25 10:00:00+00', 'Placement Cell', 'placement', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Sample gallery images
INSERT INTO gallery_images (title, description, category, image_url) VALUES
('COEK Campus View', 'Beautiful campus surrounded by greenery', 'campus', 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Modern Library', 'State-of-the-art library with extensive collection', 'facilities', 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Computer Lab', 'Well-equipped computer laboratories', 'facilities', 'https://images.pexels.com/photos/1181217/pexels-photo-1181217.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Students in Classroom', 'Interactive learning environment', 'campus', 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Sports Complex', 'Modern sports facilities for students', 'facilities', 'https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Cultural Event', 'Annual cultural festival celebration', 'events', 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800');

-- Sample departments
INSERT INTO departments (name, description, head_of_department, programs, image_url) VALUES
('Computer Science & Engineering', 'Leading department offering cutting-edge education in computer science, artificial intelligence, and software engineering. Focus on practical skills and industry-ready training.', 'Dr. Rajesh Kumar', ARRAY['B.Tech Computer Science', 'M.Tech Computer Science', 'PhD Computer Science'], 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Electronics & Communication', 'Department dedicated to education in electronics, communication systems, and embedded technologies with modern laboratories and experienced faculty.', 'Dr. Priya Menon', ARRAY['B.Tech Electronics', 'M.Tech VLSI Design', 'PhD Electronics'], 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Mechanical Engineering', 'Traditional yet innovative approach to mechanical engineering education covering design, manufacturing, and thermal sciences with industry collaborations.', 'Dr. Suresh Nair', ARRAY['B.Tech Mechanical', 'M.Tech CAD/CAM', 'PhD Mechanical'], 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Civil Engineering', 'Comprehensive civil engineering program focusing on sustainable infrastructure, construction management, and environmental engineering.', 'Dr. Lakshmi Krishnan', ARRAY['B.Tech Civil', 'M.Tech Structural Engineering', 'PhD Civil'], 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800');