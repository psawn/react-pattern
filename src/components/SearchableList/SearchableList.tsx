import { ChangeEvent, ReactNode, useRef, useState } from "react";
import { PlaceType } from "../../Places";

export type TypeFunction = (item: PlaceType | string) => string;

export function SearchableList({
  items,
  itemKeyFn,
  children,
}: {
  items: PlaceType[] | string[];
  itemKeyFn: TypeFunction;
  children: (item: PlaceType | string) => ReactNode | string;
}) {
  // can use assign let lastchange = null
  const lastChange = useRef<number | null>();
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = items.filter((item) => {
    if (typeof item === "string") {
      return item.toLowerCase().includes(searchTerm);
    } else {
      return item.id.toLowerCase().includes(searchTerm);
    }
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value.toLowerCase());
    }, 1000);
  }


  

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
