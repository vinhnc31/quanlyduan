import { useState } from 'react';
import React from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Alert } from 'react-native';



const doimk = (props) => {
    const navigation = props.navigation;

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [oldPasswordError, setOldPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateOldPassword = () => {
        if (oldPassword.length === 0) {
            setOldPasswordError('Mật cũ không được để trống');
        } else {
            setOldPasswordError('');
        }
    };

    const validateNewPassword = () => {
        if (newPassword.length === 0) {
            setNewPasswordError('Mật khẩu mới được để trống');
        } else if (newPassword.length < 6) {
            setNewPasswordError('Mật khẩu mới phải có ít nhất 6 ký tự');
        } else {
            setNewPasswordError('');
        }
    };

    const validateConfirmPassword = () => {
        if (confirmPassword.length === 0) {
            setConfirmPasswordError('Xác nhận mật không được để trống');
        } else if (confirmPassword !== newPassword) {
            setConfirmPasswordError('Xác nhận mật khẩu không giống với mật khẩu mới');
        } else {
            setConfirmPasswordError('');
        }
    };

    const navigateToAccount = () => {
        navigation.navigate('Account');
    };

    const handleSubmit = () => {
        validateOldPassword();
        validateNewPassword();
        validateConfirmPassword();
        if (!oldPasswordError && !newPasswordError && !confirmPasswordError) {
            Alert.alert('Thông Báo', 'Mật khẩu đã được thay đổi thành công !', [
                { text: 'OK', onPress: () => navigateToAccount() }
            ]);
        } else {
            Alert.alert('Lỗi', 'Kiểm tra lại thông tin bạn đã nhập !',[{text: 'OK'}]);
        }
    };

    return (
        <View style={styles.container} >
            <Text style={styles.text}>DỔI MẬT KHẨU</Text>
            <TextInput
                placeholder='Old password'
                onChangeText={setOldPassword}
                value={oldPassword}
                style={styles.input}
                secureTextEntry={true}
                onBlur={validateOldPassword}
            />
            {oldPasswordError ? <Text style={styles.checkText}>{oldPasswordError}</Text> : null}
            <TextInput
                placeholder='New Password'
                onChangeText={setNewPassword}
                value={newPassword}
                style={styles.input}
                secureTextEntry={true}
                onBlur={validateNewPassword}
            />
            {newPasswordError ? <Text style={styles.checkText}>{newPasswordError}</Text> : null}
            <TextInput
                placeholder='Comfirm Password'
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                style={styles.input}
                secureTextEntry={true}
                onBlur={validateConfirmPassword}
            />
            {confirmPasswordError ? (<Text style={styles.checkText}>{confirmPasswordError}</Text>) : null}

            <Pressable style={styles.button} onPress={() => handleSubmit()}>
                <Text style={styles.textButton}>SUMIT</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#62CDFF'
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        height: 53,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderWidth: 2,
        marginTop: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
    },
    textButton: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
        color: '#000000',
        fontSize: 20,
    },
    checkText: {
        marginLeft: 20,
        fontSize: 16,
        color: '#FF0000',
        alignSelf: 'flex-start',
    },
    text: {
        fontSize: 32,
        marginBottom: 87,
        marginTop: -80,
        textAlign: 'center',
        fontWeight: 'bold'
    },
})
export default doimk;