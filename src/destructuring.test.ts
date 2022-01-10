import React from "react";

type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Andre',
        age: 40,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Kosmonavtov street'
            }
        }
    }
})

test("", () => {
    // const age = props.age;
    // const lessons = props.lessons
    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(40)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Kosmonavtov street')
})

test(" ", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [,,ls3] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    //expect(ls1.title).toBe('1')
    expect(ls3.title).toBe('2')

})
































