
import React, {useState, useEffect} from 'react';

import {AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { useForm, Controller } from "react-hook-form";
import Dropzone from "react-dropzone";

import { makeStyles } from "@material-ui/core/styles";
import { Input, ListItemText, ListItemIcon, Button, ListItem, List, Paper } from '@material-ui/core';
import {InsertDriveFile, CloudUpload}from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        textAlign: "center",
        cursor: "pointer",
        color: "#333",
        padding: "10px",
        marginTop: "20px",
    },
    icon: {
        marginTop: "16px",
        color: "#888888",
        fontSize: "42px",
    }
}));
const AppForm = () => {
    const styles = useStyles();

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        control
    } = useForm({
        mode: 'onChange',
    })


    const onSubmit = data => {
        console.log(data)
        reset()
    }

    return (
        <div className="formWrapper">
            <h3>Новая заявка</h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input
                        {...register('name', {
                            required: 'Name is require field!',
                        })}
                        placeholder='ФИО'
                    />
                    {errors?.name && (
                        <div style={{color: 'red', marginBottom: 10}}>
                            {errors.name.message}
                        </div>
                    )}
                </div>
                <div>
                    <input
                        {...register('email', {
                            required: 'Email is required field!',
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter valid email!',
                            },
                        })}
                        placeholder='email'
                    />
                    {errors?.email && (
                        <div style={{color: 'red', marginBottom: 10}}>
                            {errors.email.message}
                        </div>
                    )}
                </div>


                <div>
					<textarea
                        {...register('description', {
                            required: 'Description is require field!',
                        })}
                        placeholder='Описание'
                    />
                    {errors?.description && (
                        <div style={{color: 'red', marginBottom: 10}}>
                            {errors.description.message}
                        </div>
                    )}
                </div>
                <div>
                    <Controller
                        name="adress"
                        control={control}
                        render={({ field }) =>
                            <AddressSuggestions  inputProps={{
                                'placeholder': 'Адрес'}} {...field} token="f6b6025b5fff69205839aa61dd8dd683f4b3b9b6" value={field.value}
                                                onChange={(e) => field.onChange(e)}/>}
                    />

                </div>
                <div>
                    <Controller
                        control={control}
                        name={"file"}
                        defaultValue={[]}
                        render={({ field })  => (
                            <>
                                <Dropzone onDrop={(e) => field.onChange(e)}>
                                    {({ getRootProps, getInputProps }) => (
                                        <Paper
                                            variant="outlined"
                                            className={styles.root}
                                            {...getRootProps()}
                                        >
                                            <CloudUpload className={styles.icon} />
                                            <input {...getInputProps()} name={"file"} onBlur={(e) => field.onBlur(e)} />
                                            <p>Drag 'n' drop files here, or click to select files</p>
                                        </Paper>
                                    )}
                                </Dropzone>
                                <List>
                                    {field.value.map((f, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <InsertDriveFile />
                                            </ListItemIcon>
                                            <ListItemText primary={f.name} secondary={f.size} />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        )}
                    />
                </div>
                <div className="butWrapper">
                    <button>Отправить</button>
                </div>


            </form>
        </div>
    )
}
export default AppForm
