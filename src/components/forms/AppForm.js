import React from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}

export default AppForm


