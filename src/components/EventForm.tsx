import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {Dayjs} from "dayjs";
import {formatDate} from "../utils/date";
import {useTypedSelector} from "../hooks/useTypedSelector";



interface EventFormProps {
    guests: IUser[],

}

const EventForm: FC<EventFormProps> = (props) => {
    const {user} = useTypedSelector(state => state.auth)
    const submitForm = () => {
        setEvent({...event, author: user.username})
        console.log(event)
    }
    const selectDate = (date: Dayjs | null) => {
        if(date){
            setEvent({...event,date: formatDate(date.toDate())})
        }

    }
    const [event,setEvent] = useState<IEvent>({
        author:'',
        date:'',
        description:'',
        guest:''
    } as IEvent);



    return (
        <Form
            onFinish={submitForm}
            autoComplete='off'
        >
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required()]}
            >
                <Input
                    value={event.description}
                    onChange={(e) => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>

                <Form.Item
                    label='Дата события'
                    name='date'
                    rules={[rules.required()]}
                >
                    <DatePicker
                        onChange={(date)=> selectDate(date)}
                    />
                </Form.Item>
            <Row justify='space-between'>
                <Form.Item
                    label='Выберите гостя'
                    name='guest'
                    rules={[rules.required()]}
                >
                    <Select
                        onChange={(guest:string) => setEvent({...event, guest: guest})}
                        style={{width: 120}}

                    >
                        {props.guests.map(guest =>
                            <Select.Option key={guest.username} value={guest.username}>
                                {guest.username}
                            </Select.Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button

                        type="primary"
                        htmlType="submit"
                    >
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;