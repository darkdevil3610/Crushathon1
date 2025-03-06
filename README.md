# <img src="" width="70" height="75" > Ai GirlFriend
** Ai GirlFriend** embodies the epitome of an interactive virtual companion, empowered by cutting-edge AI technology. This captivating project showcases a meticulously crafted frontend, leveraging the dynamic capabilities of Three.js to bring to life a stunning 3D rendition of a charming girl character. This digital persona delights users with her ability to perform an array of captivating dance moves, including the graceful sway of salsa, the rhythmic allure of twerk, and the energetic precision of drill. Moreover, she excels in the art of conversation, engaging users in immersive dialogue experiences.

Behind the scenes, the backend infrastructure, meticulously crafted with Express.js, serves as the backbone of this enchanting endeavor. Seamlessly integrated with the Gemini Google Generative AI API, the backend orchestrates the exchange of dialogue between users and the virtual companion, imbuing interactions with a sense of realism and depth.

## Key Features
- **Dynamic Dance Moves:** Users are treated to a mesmerizing display of dance prowess, with the virtual girlfriend effortlessly executing salsa, twerk, and drill routines.
- **Engaging Conversations:** Leveraging the power of AI, the virtual companion engages users in meaningful conversations, providing a truly immersive and interactive experience.

## Folder Structure

```
project-root/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   └── ...
│   │   ├── App.js
│   │   └── ...
│   └── ...
│
├── backend/
│   ├── index.js
│   └── ...
│
└── ...
```


- **frontend:** Contains the frontend codebase.
  - **public:** Static assets and HTML template.
  - **src:** Source code.
    - **components:** React components.
    - **hooks:** React Hooks.
    - **App.js:** Main component.
- **backend:** Contains the backend codebase.
  - **index.js:** Entry point for the Express server.


## Getting Started

Follow these instructions to set up and run the project locally:

### Prerequisites

- Node.js (https://nodejs.org)
- npm (Node.js package manager, included with Node.js)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GEMINI_API_KEY`

### Usage

1. Start the backend server:
```bash
cd backend
yarn dev
```
2. Start the frontend server:
```bash
cd ../frontend
npm run start
```

3. Open your web browser and navigate to `http://localhost:3000`.

4. Interact with the virtual girlfriend by clicking on the dance buttons or typing messages in the chat input.

5. Enjoy dancing with and chatting to Ai GirlFriend!



### Developer Profile

- Gourav Suresh
- Currently pursuing a Bachelor of Computer Applications (BCA) degree.
- https://gourav.is-a.dev/portfolio/
- Linkedin : gourav-suresh
- Contact details: herokugourav@gmail.com
