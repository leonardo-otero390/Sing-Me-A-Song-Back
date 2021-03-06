## Sing Me A Song API

Share and discover new songs.

This project is the backend for [Sing Me A Song](https://github.com/leonardo-otero390/Sing-Me-A-Song-Front)

Features

- [x] Add recommendation

- [x] Upvote or downvote

- [x] Get all recommendation

- [x] Get recommendation by id

- [x] Get random recommendation (70% get a greater than 10 score)

- [x] Get ranking

## Endpoints

<details>
            <summary>
                <strong>POST</strong> /recommendations
            </summary>

        send body request like this:

```json
{
  "name": "Justin Bieber - Baby", // string @unique
  "youtubeLink": "https://www.youtube.com/watch?v=kffacxfA7G4" // youtube link
}
```

- it returns status <strong>201</strong> for succes

 </details>

 <details>
            <summary>
                <strong>POST</strong> /recommendations/SONGID/upvote
            </summary>

- change SONGID to the song id your upvoting

- implements a point to score

- it returns status <strong>200</strong> for succes

 </details>

  <details>
            <summary>
                <strong>POST</strong> /recommendations/SONGID/downvote
            </summary>

- change SONGID to the song id your upvoting

- remove a point of score

- if score gets less than -5 the recommendation is removed

- it returns status <strong>200</strong> for succes

 </details>

  <details>
            <summary>
                <strong>GET</strong> /recommendations
            </summary>

- get the last 10 recommendations

```json
[
  {
    "id": 1,
    "name": "Chitãozinho E Xororó - Evidências",
    "youtubeLink": "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    "score": 245
  }
]
```

- it returns status <strong>200</strong> for succes

 </details>

  <details>
            <summary>
                <strong>GET</strong> /recommendations/SONGID
            </summary>

- change SONGID to the song id you're looking for

```json
[
  {
    "id": 1,
    "name": "Chitãozinho E Xororó - Evidências",
    "youtubeLink": "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    "score": 245
  }
]
```

- it returns status <strong>200</strong> for succes

 </details>

  <details>
            <summary>
                <strong>GET</strong> /recommendations/random
            </summary>

- get a random recommendation where 70% of times the score is greater than 10

```json
[
  {
    "id": 1,
    "name": "Chitãozinho E Xororó - Evidências",
    "youtubeLink": "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    "score": 245
  }
]
```

- it returns status <strong>200</strong> for succes

 </details>

   <details>
            <summary>
                <strong>GET</strong> /recommendations/top/AMOUNT
            </summary>

- Rank recommendations and return the top AMOUNT

```json
[
  {
    "id": 150,
    "name": "Chitãozinho E Xororó - Evidências",
    "youtubeLink": "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    "score": 245
  },
  {
    "id": 12,
    "name": "Falamansa - Xote dos Milagres",
    "youtubeLink": "https://www.youtube.com/watch?v=ePjtnSPFWK8&ab_channel=CHXVEVO",
    "score": 112
  }
]
```

- it returns status <strong>200</strong> for succes

 </details>

## Technologies

<div style="display: flex; gap: 10px; height: 40px;">
  <a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> 
      <img src="https://user-images.githubusercontent.com/85591297/157519943-9da08e53-e59d-450a-8b0d-81af17974fd0.svg" alt="TypeScript" height="40"/>
  </a>
  <a title="Node JS" href="https://nodejs.org" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" height="40"/> 
  </a>
  <a title="Express JS" href="https://expressjs.com/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="expressjs" height="40"/> 
  </a>
  <a title="Postgre" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://user-images.githubusercontent.com/85591297/157520309-59a18d2e-ee4d-433c-8990-12fdbba37a0d.svg" alt="Postgre" height="40"/> 
  </a>
  <a title="Prisma" href="https://www.prisma.io/" target="_blank" rel="noreferrer"> 
      <img style="background: white;" src="https://miro.medium.com/max/1400/1*X6wCDTpjcn_WcvDW9jS4WQ.png" alt="Prisma" height="40"/> 
  </a>
</div>

## Requirements

### [npm](https://www.npmjs.com/)

<details>
    <summary>install npm</summary>

```bash
wget -qO- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh> | bash

## Or this command
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Close and open terminal
nvm install --lts
nvm use --lts
# Verify node version
node --version # Must show v14.16.1
# Verify npm version
npm -v
```

</details>

### [postgreSQL](https://www.postgresql.org/)

<details>
    <summary>install postgres</summary>

```bash
sudo apt install postgresql postgresql-contrib
```

</details>

## How to run

1. Clone this repository
2. Install dependencies

```bash
npm i
```

3. set your .env file

4. Create database with prisma

- open terminal and run

```bash
npx prisma init
npx prisma migrate dev
```

5. Run the project with

```bash
npm run start (deploy)
```

6. Run the project in development mode (nodemon)

```bash
npm run dev
```
