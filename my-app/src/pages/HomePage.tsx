import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import '../styles/homePage.scss';
import { ArrayHomePageButtons, HomePageButtons } from "utils/info";
import { useNavigate } from "react-router-dom";
import { fetchData, fetchLogout } from "services/userSlice";
import { getCorrectButtonName, getCorrectPath } from "utils/functions";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const HomePage = () => {

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user.user);
  const tokens = useAppSelector(state => state.user.user.tokens)


  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if ((e.target as HTMLDivElement).textContent?.toLowerCase() === HomePageButtons.Logout) {
      dispatch(fetchLogout(tokens.accessToken));
    }

    if ((e.target as HTMLDivElement).textContent?.toLowerCase() === HomePageButtons.PersonalData.toLowerCase()) {
      dispatch(fetchData(tokens.accessToken));
    }
  }

  return (
    <div className="home-page-wrapper">
      <h1 className="home-page-title">
        {`Hello, ${user.email}`}
      </h1>
      <div className="home-page-buttons-container">
        {ArrayHomePageButtons.map(button => {
          const path = getCorrectPath(button);
          return (
            <div className="home-page-buttons" onClick={(e) => {
              handleClick(e);
              navigate(path);
            }}>
              {getCorrectButtonName(button)}
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default HomePage;





