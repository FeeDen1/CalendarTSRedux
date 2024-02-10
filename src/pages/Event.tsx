import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {EventActionCreators} from "../store/reducers/events/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event: FC = () => {
    const {guests} = useTypedSelector(state => state.event)
    const dispatch = useAppDispatch()
    const [modalVisible, setModalVisible] = useState(false)


    useEffect(() => {
        dispatch(EventActionCreators.fetchGuests())
    },[])
    return (
        <Layout>
            <EventCalendar events={[]}/>
            <Row justify='center'>
                <Button
                    onClick={() => setModalVisible(true)}
                >
                    Добавить событие</Button>
            </Row>
            <Modal
                centered
                title='Добавить событие'
                open={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
            >
                <EventForm
                guests={guests}/>
            </Modal>
        </Layout>
    );
};

export default Event;