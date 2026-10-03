// YOUR DATA. To add a project, copy one block, edit it, save. No HTML needed.
// Leave `live` or `code` as "" and that button simply won't appear.
const PROJECTS = [
  {
    title: "Chess Game",
    summary: "A browser chess game with a computer opponent at three difficulty levels, from random moves to Minimax with Alpha-Beta pruning.",
    points: [
      "Legal move validation, drag-and-drop play, check/checkmate, stalemate and draw handling",
      "Pawn promotion, undo, captured pieces, move history and board flip",
      "Deployed publicly on Vercel"
    ],
    stack: ["React", "JavaScript", "chess.js", "react-chessboard", "Vercel"],
    live: "https://chess-game-as.vercel.app/",
    code: "https://github.com/asmitsaha5/chess-game"
  },
  {
    title: "ScholarAI",
    summary: "An AI study assistant for summaries, notes, quizzes and resume building. Built at the Status Code 2.0 hackathon, IISER Kolkata.",
    points: [
      "Google Sign-In with Firebase Authentication",
      "Firestore stores each user's data and activity across sessions"
    ],
    stack: ["Next.js", "React", "Firebase", "Firestore"],
    live: "",   // TODO: paste your ScholarAI deployment URL here
    code: ""    // TODO: paste the repo URL if it is public
  }
];
