import { createStackNavigator, createAppContainer } from "react-navigation";
import App from './App';
import DetailCard from './DetailCard';

const AppNavigator = createStackNavigator({
    Home: {
        screen: App,
        navigationOptions: {
            headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                width: '100%',
                color: 'rgb(103, 128, 159)',

            },
            title: 'APOD',
        }
    },
    Details: {
        screen: DetailCard,
        navigationOptions: {
            headerTitleStyle: {
                fontSize: 24,
                fontWeight: 'bold',
                width: '100%',
                color: 'rgb(103, 128, 159)',
            },
            title: 'Details',
        }
    },
}, {
        initialRouteName: 'Home',
    }
);
const MainAppNavigator = createAppContainer(AppNavigator);
export default MainAppNavigator;