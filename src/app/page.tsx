import MainLayout from "./Layouts/MainLayout";
import Movies from "./components/Movies";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Movies />
      </MainLayout>
    </div>
  );
}
