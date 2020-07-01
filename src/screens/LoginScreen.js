import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import colors from '../config/colors'
import * as Yup from 'yup';

import { AppForm, AppFormInput, SubmitButton } from '../components/forms';


const vaidationShema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={require('../assets/images/logo.png')} style={styles.image} />
            </View>

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={vaidationShema}
            >
                <View styles={styles.inputContainer}>
                    <AppFormInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        backgroundColor={colors.gray}
                        icon="email"
                        name="email"
                        keyboadType="email-address"
                        placeholder="Email" />

                    <AppFormInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        backgroundColor={colors.gray}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>
                <SubmitButton title="Login" />
            </AppForm>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 7
    },
    image: {
        width: 150,
        height: 150
    },
    logoContainer: {
        alignItems: "center"
    }

})
