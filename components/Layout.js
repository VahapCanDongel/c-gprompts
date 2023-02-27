import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="font-rubik">
      <div className="w-full flex justify-center items-center bg-black">
        <Navigation />
      </div>

      <main>{children}</main>
    </div>
  );
}
