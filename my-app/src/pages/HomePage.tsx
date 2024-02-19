import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import '../styles/homePage.scss';
import { ArrayHomePageButtons, HomePageButtons } from "utils/info";
import { useNavigate } from "react-router-dom";
import { fetchLogout } from "services/userSlice";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


const HomePage = () => {

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const user = useAppSelector((state) => state.user.user.user);
  const tokens = useAppSelector(state => state.user.user.tokens)

  return (
    <div className="home-page-wrapper">
      <h1 className="home-page-title">
        {`Hello, ${user.email}`}
      </h1>
      <div className="home-page-buttons-container">
        {ArrayHomePageButtons.map(button => {
          const path = (button === HomePageButtons.Lougout) ? '/login' : `/${button.split(' ').join('')}`;
          return (
            <div className="home-page-buttons" onClick={(e) => {
              if ((e.target as HTMLDivElement).textContent?.toLowerCase() === HomePageButtons.Lougout) {
                e.preventDefault();
                dispatch(fetchLogout(tokens.accessToken));
              }
              navigate(path)
            }

            }>
              {button.replace(button[0], button[0].toUpperCase())}
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default HomePage;





