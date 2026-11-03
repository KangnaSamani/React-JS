import React from 'react'

function Card(props){
  // console.log("props", props);
  // console.log(username);
    return(
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img className="size-12 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLspggJu8aH_w86V9R1neP4y_91V18oOXJmoYEz6GWuw&s=10" alt="ChitChat Logo" />
  <div>
    <div className="text-xl font-medium text-black dark:text-white">{props.username}</div>
    <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {props.btnText}
    </button>
  </div>
</div>
    )
}

export default Card