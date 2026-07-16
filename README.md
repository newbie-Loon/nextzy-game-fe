# Nextzy-Game-BE

## Frontend Setup

### Navigate to frontend folder
cd nextzy-game-fe

### Install dependencies
npm install

### Create .env
NEXT_PUBLIC_API_URL=http://localhost:8080

### Run application
npm run dev

### Frontend Server
http://localhost:3000

--- 
# 2. Architecture Explanation (การอธิบายสถาปัตยกรรม) 
```md # Architecture The application uses a Client-Server Architecture. ```
text 
┌─────────────┐ 
│ Next.js     │ 
│ Frontend UI │ 
└──────┬──────┘ 
       │ REST API 
       ▼ 
┌─────────────┐ 
│ Gin Backend │ 
│ Business    │ 
│ Logic       │ 
└──────┬──────┘ 
       │ GORM 
       ▼ 
┌─────────────┐ 
│ PostgreSQL  │ 
│ Database    │ 
└─────────────┘

# 3. Feature Explanation (การอธิบาย Features) 
```md 
# Features 
## Home Page 
### Accumulated Points 
    - Displays user accumulated score 
    - Maximum score displayed is 10,000 
    - Progress bar visualizes progression 
### Reward Checkpoints 
Three reward checkpoints available:
 | Reward | Required Score |
 |--------|----------------| 
 |    A   | 5,000          | 
 |    B   | 7,500          | 
 |    C   | 10,000         | 
 
 ### Reward Claim 
 Users can:
 
  - Claim reward once eligible 
  - Receive success modal 
  - Prevent duplicate claims 

### History 
Two tabs available: 

#### Play History 
Displays game results: 
- 300 points 
- 500 points 
- 1000 points 
- 3000 points 

#### Reward History 
Displays rewards claimed: 
- Reward A 
- Reward B 
- Reward C 

### Reset Progress 

Tester can: 
- Reset accumulated score 
- Clear play history 
- Clear reward history 

--- 

## Game Page 
### Random Point Selection Available points: 
- 300 
- 500 
- 1000 
- 3000 

### Elimination Animation When clicking "สุ่มคะแนน":

 - Points are eliminated one by one 
 - Last remaining point becomes the reward 
 
 ### Reward Modal After game completion: 
 
 - Display won score 
 - User remains on Game Page 
 - User can continue playing immediately 
 
 ### Score Accumulation Won score is stored in: 
 - Point History 
 - User accumulated score