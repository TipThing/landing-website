import { useSessionStorage } from "usehooks-ts";
import PrimaryMenuItems from "../menus/Primary";

type Props = {
  children: React.ReactNode;
};

export default function ResponsiveMenu({ children }: Props) {
  const [open, setOpen] = useSessionStorage("mobileNavigation", false);

  return (
    <div className="drawer">
      <input
        id="app-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
        readOnly
      />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="app-drawer"
          className="drawer-overlay"
          onClick={() => setOpen(!open)}
        />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 bg-opacity-60 backdrop-blur-lg">
          <PrimaryMenuItems />
        </ul>
      </div>
    </div>
  );
}
