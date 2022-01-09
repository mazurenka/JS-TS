
test("", () => {
    let props = {
        name: 'Andre',
        age: 40,
        lessons: [{title: '1'}, {title: '2'}]
    }

    const age = props.age;
    const lessons = props.lessons
      


    expect(age).toBe(40)

})