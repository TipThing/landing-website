export default function PrimaryMenu() {
  return (
    <ul className="menu menu-horizontal rounded-box p-2">
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <span>Parent</span>
        <ul className="rounded-box bg-base-100 p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
          <li>
            <a>Submenu 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
}
