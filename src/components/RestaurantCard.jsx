import { useNavigate }  from "react-router-dom";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

const RestaurantCard = ({ data, isAdmin, refresh}) => {
    const navigate = UserNavigate();
    const handleDelete = () => {
        if (!confirm("Are you sure you want to delete?")) return;
        const updated =
        getRestaurants().filter((r) => r.RestaurantID !== data.RestaurantID);
        saveRestaurants(updated);
        alert("Deleted successfully");
        refresh();

    };
    return (
        <div style={{ border: "1px solid gray", padding: "10px"}}>
            <img src={data.image} width="150" />
            <h4>{data.restaurantName}</h4>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>Parking: {data.parkingLot ? "Yes" : "No"}</p>
            {isAdmin && (
                <>
                <button onClick={() => 
                    navigate(`/admin/restaurants/update/${data.RestaurantID}`)
                }
                >
                    Update
                </button>
                <button onClick={handleDeleye}>Delete</button>
                </>
            )}
        </div>
    );
    };
export default RestaurantCard;