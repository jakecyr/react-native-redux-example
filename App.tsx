import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import Detail from './pages/Detail';

const store = createStore(rootReducer);
const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={({
                            title: 'Todos',
                            headerTitleStyle: {
                                alignSelf: 'center',
                                fontWeight: '500',
                                fontSize: 20,
                            },
                        })}
                    ></Stack.Screen>

                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
