import {useEffect, useState } from "react";
import AddRestaurantForm from "../../components/AddRestaurantForm";
import RestaurantCard  from "../../components/RestaurantCard";
import { getRestaurants }from "../../utils/localStorage";

const AdminDashboard =() => {
    const [data, setData] = useState([]);
    const refresh = () => {
        setData(getRestaurants());
    };
    useEffect(() => {
        refresh();
    }, []);
    return (
        <div style={{ display: "flex" }}>
            <AddRestaurantForm refresh={refresh} />
                </div>
                {data.map((r) => (
                    <RestaurantCard
                    key={r.RestaurantID}
                data={r}
            isAdmin={true}
            refresh={refresh}
            />
                ))}
                </div>
                </div>
            );
        };
        export default AdminDashboard;