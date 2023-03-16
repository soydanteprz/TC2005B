CREATE DATABASE nba;


CREATE TABLE team (
    name VARCHAR(30) NOT NULL,
    city VARCHAR(30) NOT NULL,
    image VARCHAR(512) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id INT NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE player (
    name VARCHAR(30) NOT NULL,
    number INT NOT NULL,
    position VARCHAR(30) NOT NULL,
    image VARCHAR(512) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id INT NOT NULL,
    team_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (team_id) REFERENCES team (id)
)


-- insert data into team table
INSERT INTO team (name, city, image, id) VALUES
('Celtics', 'Boston', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png', 1),
('Golden State Warriors', 'Oakland', 'https://b.fssta.com/uploads/application/nba/team-logos/Warriors.png', 2),
('Los Angeles Lakers', 'Los Angeles', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png', 3),
('Miami Heat', 'Miami', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/1200px-Miami_Heat_logo.svg.png', 4),
('New York Knicks', 'New York', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/New_York_Knicks_logo.svg/800px-New_York_Knicks_logo.svg.png', 5);

-- insert data into player table
INSERT INTO player (name, number, position, image, id, team_id) VALUES
('Stephen Curry', 30, 'Point Guard', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254', 1, 2),
('Klay Thompson', 11, 'Shooting Guard', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png', 2, 2),
('Draymond Green', 23, 'Power Forward', 'https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png', 3, 2),
('LeBron James', 23, 'Small Forward', 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png', 4, 3),
('Anthony Davis', 3, 'Power Forward', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png', 5, 3),
('Jimmy Butler', 22, 'Shooting Guard', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png', 6, 4);



-- Create table for user
CREATE TABLE users (
    nombre VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(500) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id INT NOT NULL,
    PRIMARY KEY (id)
)

