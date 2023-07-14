import Search from "antd/es/input/Search";
import { memo } from "react";

interface IProptype {
  name: string;
}

const ListBar = memo(({ name }: IProptype) => {
  function onSearch() {
    console.log("搜索成功");
  }

  return (
    <div className="flex justify-between">
      <h2>{name}</h2>
      <div className="search">
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      </div>
    </div>
  );
});

export default ListBar;
