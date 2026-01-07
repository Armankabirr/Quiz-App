# Quiz App

A simple, responsive Quiz App built with vanilla HTML, CSS, and JavaScript. Renders questions dynamically, handles answer selection with feedback, navigates via Next, shows the final score, and supports replay.

## Features
- Dynamic question rendering
- Answer selection with correctness feedback
- Next-button navigation through all questions
- Final score display and replay option
- Mobile-friendly layout

## Getting Started
- Open `index.html` directly in your browser, or use a local server.
- VS Code tip: install Live Server and click "Go Live" from `index.html`.

### Optional (local static server)
If you prefer a local server without extensions:
1. Use Python (if installed):
   ```bash
   python -m http.server 5500
   ```
   Then visit http://localhost:5500
2. Or use a Node static server like `http-server` (if installed):
   ```bash
   npx http-server -p 5500
   ```

## Usage
1. Load the page; the first question appears automatically.
2. Click an answer; correct/incorrect states show and Next becomes visible.
3. Click Next to continue through all questions.
4. After the last question, your score appears with a Play Again option.

## Project Structure
- `index.html` — markup and element IDs used by the script
- `style.css` — base styling and layout
- `script.js` — quiz logic (render questions, handle answers, navigate, show score)

## Customization
- Edit questions in `script.js` under the `qustions` array:
  ```js
  const qustions = [
    {
      qustion: "Your question text",
      answers: [
        { text: "Option A", correct: false },
        { text: "Option B", correct: true },
        // ...
      ]
    }
  ];
  ```
- Styling for answer feedback (add to `style.css` if desired):
  ```css
  .btn.correct { background: #22c55e; color: #fff; border-color: #22c55e; }
  .btn.incorrect { background: #ef4444; color: #fff; border-color: #ef4444; }
  ```

## Notes
- Ensure these IDs exist in `index.html`: `questions`, `answers`, `next-btn`.
- The script manages button states, navigation, and score display.


## License
Use and adapt freely for learning or personal projects.
