import Map from "../components/Map";
import User from "../components/User";
import Siderbar from "../components/SiderBar";

import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Siderbar />
      <Map />
      <User />
    </div>
  );
}
