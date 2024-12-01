import Categories from "@/components/ui/Categories";
import Products from "@/components/widgets/Products";
import Top from "@/components/widgets/Top";

export default function Home() {
  return (
    <div className="flex flex-col md:px-10 px-4">
      <Categories />
      <Products />
      <Top />
    </div>
  );
}
