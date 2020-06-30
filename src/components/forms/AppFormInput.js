import React from 'react'
import { StyleSheet } from 'react-native'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik';
import colors from '../../config/colors';


const AppFormInput = ({ name, ...otherProps }) => {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                backgroundColor={colors.gray}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            {touched[name] && <ErrorMessage error={errors[name]} />}
        </>
    )
}

export default AppFormInput

const styles = StyleSheet.create({})