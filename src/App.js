import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/add">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/update">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// =====================================================================

// import "./App.css";
// import React, { useState } from "react";

// export default function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [form, setForm] = useState({
//     todo: "",
//     status: false,
//   });

//   const handleChange = (e) => {
//     setForm({
//       todo: e.target.value,
//       status: false,
//     });
//   };

//   const resetInput = () => {
//     setForm({ todo: "", status: false });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTodoList([...todoList, form]);
//     resetInput();
//   };

//   const handleCheck = (index) => {
//     const newTodo = todoList.map((e, i) => {
//       if (i === index) {
//         return {
//           ...e,
//           todo: e.todo,
//           status: true,
//         };
//       } else {
//         return e;
//       }
//     });
//     setTodoList(newTodo);
//   };

//   const handleDelete = (index) => {
//     const newTodo = todoList.filter((e, i) => {
//       if (i !== index) {
//         return e;
//       }
//     });
//     setTodoList(newTodo);
//   };

//   return (
//     <div>
//       <div className="jumbotron">
//         <h1>Todo List App</h1>

//         <form className="form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="todo"
//             value={form.todo}
//             placeholder="todo.."
//             onChange={handleChange}
//           />
//           <button type="submit" className="btn-submit">
//             Submit
//           </button>
//         </form>
//       </div>
//       <div className="content">
//         {todoList.map((e, i) => (
//           <div className="cards" key={i}>
//             <div className="action">
//               <input
//                 type="checkbox"
//                 checked={e.status ? true : false}
//                 onChange={() => handleCheck(i)}
//               />
//             </div>
//             <div className="text">{e.todo}</div>
//             <div className="button-action">
//               <button className="button button-edit">Edit</button>
//               <button
//                 onClick={() => handleDelete(i)}
//                 className="button button-hapus"
//               >
//                 Hapus
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ============================================================================

// import React from "react";
// import ContentLoader from "react-content-loader";

// const App = (props) => (
//   <ContentLoader
//     width={700}
//     height={350}
//     viewBox="0 0 700 350"
//     backgroundColor="#f5f5f5"
//     foregroundColor="#dbdbdb"
//     {...props}
//   >
//     <rect x="4" y="8" rx="3" ry="3" width="8" height="317" />
//     <rect x="7" y="317" rx="3" ry="3" width="669" height="8" />
//     <rect x="669" y="9" rx="3" ry="3" width="7" height="313" />
//     <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
//     <rect x="114" y="52" rx="6" ry="6" width="483" height="15" />
//     <circle cx="77" cy="60" r="15" />
//     <rect x="116" y="105" rx="6" ry="6" width="420" height="15" />
//     <circle cx="78" cy="113" r="15" />
//     <rect x="115" y="158" rx="6" ry="6" width="483" height="15" />
//     <circle cx="78" cy="166" r="15" />
//     <rect x="117" y="211" rx="6" ry="6" width="444" height="15" />
//     <circle cx="79" cy="219" r="15" />
//     <rect x="117" y="263" rx="6" ry="6" width="483" height="15" />
//     <circle cx="80" cy="271" r="15" />
//   </ContentLoader>
// );

// App.metadata = {
//   name: "Sridhar Easwaran",
//   github: "sridhareaswaran",
//   description: "HelpLinks",
//   filename: "App",
// };

// export default App;
