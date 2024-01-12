import * as elements from "typed-html";

export function Header() {
  return (
    <header class="flex justify-between navbar bg-base-100">
      <a class="btn btn-ghost normal-case text-xl">Kitchen Sink</a>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/todos">Todos</a>
          </li>
          <li>
            <a href="/chat">The Room</a>
          </li>
          <li>
            <a href="/llama">Ollama</a>
          </li>
          <li>
            <a href="/sse">SSE</a>
          </li>
          {/* <li tabindex="0"> */}
          {/*   <details> */}
          {/*     <summary>Parent</summary> */}
          {/*     <ul class="p-2"> */}
          {/*       <li> */}
          {/*         <a>Submenu 1</a> */}
          {/*       </li> */}
          {/*       <li> */}
          {/*         <a>Submenu 2</a> */}
          {/*       </li> */}
          {/*     </ul> */}
          {/*   </details> */}
          {/* </li> */}
        </ul>
      </div>
      <div class="navbar-end lg:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/chat">The Room</a>
            </li>
            <li>
              <a href="/llama">Ollama</a>
            </li>
            <li>
              <a href="/sse">SSE</a>
            </li>
            {/* <li> */}
            {/*   <a>Parent</a> */}
            {/*   <ul class="p-2"> */}
            {/*     <li> */}
            {/*       <a>Submenu 1</a> */}
            {/*     </li> */}
            {/*     <li> */}
            {/*       <a>Submenu 2</a> */}
            {/*     </li> */}
            {/*   </ul> */}
            {/* </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
