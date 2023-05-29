import { Switch as HeadlessSwitch } from "@headlessui/react";

export default function Switch(props) {
  if (props === {}) return null;
  return (
    <HeadlessSwitch
      checked={props.enabled}
      onChange={()=>props.setEnabled(!props.enabled)}
      className={`${props.enabled ? "bg-primary" : "bg-gray-400"}
          relative inline-flex items-center h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span
        aria-hidden="true"
        className={`${props.enabled ? "translate-x-3" : "-translate-x-3"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out aspect-square`}
      />
    </HeadlessSwitch>
  );
}