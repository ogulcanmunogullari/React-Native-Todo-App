import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
export default function App() {
  const [inputData, setInputData] = useState();
  const [taskText, setTaskText] = useState([]);
  const [taskLine, setTaskLine] = useState(true);
  const setTextFunction = () => {
    if (inputData !== ' ') {
      if (inputData !== null) {
        //Birleşik koşul olmadı ? nedense ?
        setTaskText([...taskText, inputData]);
        setInputData(null);
      }
    } else {
      setInputData(null);
    }
  };
  const deleteTask = index => {
    let copyTask = [...taskText];
    copyTask.splice(index, 1);
    setTaskText(copyTask);
  };
  const completeTask = () => {
    taskLine === false ? setTaskLine(true) : setTaskLine(false);
  };
  //Çizgi her todo yu etkiliyor ayrı yapamadım.

  return (
    <View style={style.flex}>
      <Text style={style.baslik}>Yapılacaklar</Text>
      <View style={style.container}>
        <TextInput
          style={style.input}
          placeholder="Görev Ekle"
          value={inputData}
          onChangeText={item => setInputData(item)}
        />
        {taskText.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => completeTask(index)}
              style={style.textView}>
              <Text
                style={{
                  textDecorationLine:
                    taskLine === false ? 'line-through' : 'none',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {item}
              </Text>
              <Text onPress={() => deleteTask()} style={style.sil}>
                Sil
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={() => setTextFunction()}
          style={style.button}>
          <Text>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-between'},
  flex: {flex: 1},
  baslik: {
    fontSize: 24,
    alignSelf: 'center',
    color: 'brown',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
    margin: 10,
    marginTop: 'auto',
  },
  input: {backgroundColor: 'lightgrey', padding: 10, margin: 10},
  textView: {
    borderColor: 'lightgrey',
    borderWidth: 2,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 7,
    alignItems: 'center',
  },
  sil: {
    marginLeft: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'red',
    borderWidth: 1,
    color: 'red',
    fontWeight: 'bold',
  },
});
