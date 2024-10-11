import { ListTodo, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Link, useOutlet, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Header: React.FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState(searchParam.get("search") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchParam.set("search", search);
    setSearchParam(searchParam);
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <div className="w-full flex justify-between items-center gap-4">
        <form onSubmit={handleSubmit} className="min-w-36 w-full">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              id="search"
              placeholder="Search"
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <Link to={"/"}>
          <ListTodo />
        </Link>
      </div>
    </header>
  );
};

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const outlet = useOutlet();
  return (
    <div>
      <Header />
      <main className="container">{outlet ? outlet : children}</main>
    </div>
  );
};
