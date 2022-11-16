import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{
        background: theme.bg,
        color: theme.syntax,
      }}
      className="book-list"
    >
      <ul>
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
    </div>
  );
};

export default BookList;

// Komponent klasowy stara wersja

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         style={{
//           background: theme.bg,
//           color: theme.syntax,
//         }}
//         className="book-list"
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The way of kings</li>
//           <li style={{ background: theme.ui }}>The name of the wind</li>
//           <li style={{ background: theme.ui }}>The final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default BookList;
