import { Link, Tabs } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

const TabRoot = ()=>{
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title:'Index'}}/>
            <Tabs.Screen name="about" options={{title:'About'}}/>
            <Tabs.Screen name="profile" options={{title:'Profile'}}/>
        </Tabs>
    )
}
export default TabRoot