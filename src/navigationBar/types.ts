// import type {MenuInfo} from "antd"
export type NavigationBarProps = {
  onSortingChange: (e: any) => void;
  onOrderClick: (e: any) => void;
  orderState: string;
  onSearch: (e: string) => void;
  setSearchText: (e: string) => void;
};
