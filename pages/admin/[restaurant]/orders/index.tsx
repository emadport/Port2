import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./orders.module.scss";
import PrimaryLayout from "components/Primary-layout/index";
import { FiEye } from "react-icons/fi";
import useOrders from "hooks/Order.hook";
import captalizeFirstLetter from "lib/captalizeFirstChar";
import Modal from "components/WarningModal";
import InfoModal from "components/Modal";
import Search from "components/Search-form";
import Warning from "@/components/Warning";
import { MdOutlineExpandMore } from "react-icons/md";
import AdminOrdersInfo from "@/components/AdminOrdersInfo";
import TableData from "@/components/Table/TableData";
import TableHeader from "@/components/Table/TableHeader";

const AdminsOrders = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState([]);
  const [infoOpen, setInfoOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<string>();
  const [error, setError] = useState(false);
  const [currentOrderInfo, setCurrentOrderInfo] = useState<{
    _id: string;
    extra: { name: string; quantity: string }[];
    description: string;
  }>();
  const { AdminOrders, adminOrdersError } = useOrders();
  const date = new Date();

  async function connect_to_socket1() {
    try {
      const evtSource = new EventSource(
        `${process.env.SERVER_LINK}/api/adminOrders`
      );
      evtSource.onmessage = (event) => {
        setShowAlert(true);

        setData(JSON.parse(event.data));
      };
      evtSource.onerror = (event) => {
        setError(true);
      };
      evtSource.onopen = (event) => {
        console.log("open");
      };
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    connect_to_socket1();
  }, []);

  function searchOverRestaurants(e) {
    try {
      e.preventDefault();
      //Filter the restaurants when user begin to search
      const query = e.target.value;
      setSearchResult(query);
    } catch (err) {
      console.log(err);
    }
  }
  function onClick(id: string, fact: typeof currentOrderInfo) {
    setCurrentOrderInfo(fact);
    setInfoOpen(true);
  }

  const orders = data?.length ? data : AdminOrders;
  if (!orders?.length) return <Warning label="Orders" message="Loading..." />;
  if (error || adminOrdersError)
    return (
      <Warning
        label="Orders"
        message="Unexpected error happend. Please try later"
      />
    );
  return (
    <div className={styles.container}>
      <span style={{ marginLeft: "20px" }}>
        {date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()}
      </span>
      <div className={styles.search_parent} style={{ margin: "20px" }}>
        <Search
          label={"Hitta din restaurang"}
          onChange={searchOverRestaurants}></Search>
      </div>

      <table>
        <tbody>
          <tr style={{ backgroundColor: "tomato" }}>
            <TableHeader>Table</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>quantity</TableHeader>
            <TableHeader>price</TableHeader>
            <TableHeader>Order Time</TableHeader>
            <TableHeader>View</TableHeader>
          </tr>
          {Array.isArray(orders) &&
            orders.map((fact, i) => {
              return (
                <tr key={i}>
                  <TableData style={{ tableLayout: "auto", width: "10%" }}>
                    {fact?.costumer?.table}
                  </TableData>
                  <TableData>
                    {captalizeFirstLetter(fact?.product?.name as string)}
                  </TableData>
                  <TableData
                    style={{ tableLayout: "auto", width: "10%" }}
                    color={
                      (fact?.orderQuantity as number) <= 1 ? "white" : "tomato"
                    }>
                    {fact?.orderQuantity}
                  </TableData>
                  <TableData
                    style={{
                      tableLayout: "auto",
                      width: "15%",
                    }}>{`${fact?.product?.price}.00 kr`}</TableData>
                  <TableData>{new Date(fact?.date).toLocaleString()}</TableData>
                  <TableData style={{ tableLayout: "auto", width: "10%" }}>
                    <MdOutlineExpandMore
                      style={{ cursor: "pointer" }}
                      onClick={() => onClick(fact?._id as string, fact)}
                    />
                  </TableData>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <InfoModal
          setIsModalOpen={setInfoOpen}
          isModalOpen={infoOpen}
          label="Orders`s extra info">
          {
            <div>
              <AdminOrdersInfo currentOrderInfo={currentOrderInfo} />
            </div>
          }
        </InfoModal>
      </div>
      <div>
        <Modal
          setIsModalOpen={setShowAlert}
          isModalOpen={showAlert}
          button_label="Let`s see the orders"
          label="New order">
          <div>
            <span style={{ color: "wheat" }}>New order</span>
            <audio autoPlay>
              <source src="/alert2.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminsOrders;
AdminsOrders.Layout = PrimaryLayout;
