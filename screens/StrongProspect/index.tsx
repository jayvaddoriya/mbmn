/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const strongProspects = [
  {
    name: 'jay',
  },
  {
    name: 'Raj',
  },
];

const StrongProspect = () => {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [nestedPopoverVisible, setNestedPopoverVisible] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [questions, setQuestions] = useState<string[]>([]);

  const showPopover = () => {
    setPopoverVisible(true);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
    setNestedPopoverVisible(false);
  };

  const showNestedPopover = () => {
    setNestedPopoverVisible(true);
  };

  const hideNestedPopover = () => {
    setNestedPopoverVisible(false);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleAddQuestion = () => {
    if (inputValue.trim() !== '') {
      setQuestions(prevQuestions => [...prevQuestions, inputValue]);
      setInputValue('');
    }
  };

  const popoverContent = (
    <View style={styles.popoverContent}>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('Demo Done');
          hidePopover();
        }}>
        <Text>Demo Done</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('Follow-up Done');
          hidePopover();
        }}>
        <Text>Follow-up Done (00)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('All Done');
          hidePopover();
        }}>
        <Text>All Done</Text>
      </TouchableOpacity>
    </View>
  );

  const nestedPopoverContent = (
    <ScrollView style={styles.nestedPopoverContainer}>
      <Text>Which type of response?</Text>
      <TouchableOpacity style={styles.responseOption}>
        <Icon name="circle" size={20} color="green" />
        <Text style={styles.optionText}>Positive</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.responseOption}>
        <Icon name="circle" size={20} color="red" />
        <Text style={styles.optionText}>Negative</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textArea}
        multiline
        placeholder="Additional Comments"
      />
      <Text>Prospect Questions : </Text>
      {questions.map((question, index) => (
        <View style={styles.inputContainer} key={index}>
          <TextInput style={styles.input} value={question} editable={false} />
        </View>
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Question"
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <TouchableOpacity style={styles.plusButton} onPress={handleAddQuestion}>
          <Icon name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderProspectRow = ({item}: any) => (
    <View style={styles.tableRow}>
      <Text>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        {selectedOption === 'Demo Done' && (
          <Text
            style={styles.optionTag}
            onPress={() => {
              if (selectedOption === 'Demo Done') {
                hidePopover();
                showNestedPopover();
              }
            }}>
            DD
          </Text>
        )}
        {selectedOption === 'Follow-up Done' && (
          <Text style={styles.optionTag}>FD</Text>
        )}
        {selectedOption === 'All Done' && (
          <Text style={styles.optionTag}>AD</Text>
        )}
        <TouchableOpacity style={{marginRight: 10}}>
          <Icon name="eye" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showPopover}>
          <Icon name="ellipsis-v" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Strong Prospect List</Text>
      <FlatList
        data={strongProspects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProspectRow}
      />

      <Popover isVisible={popoverVisible} onRequestClose={hidePopover}>
        {popoverContent}
      </Popover>

      {nestedPopoverVisible && (
        <Popover
          isVisible={nestedPopoverVisible}
          onRequestClose={hideNestedPopover}>
          {nestedPopoverContent}
        </Popover>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  popoverContent: {
    padding: 10,
  },
  popoverItem: {
    paddingVertical: 8,
  },
  optionTag: {
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  nestedPopoverContainer: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    maxHeight: 400,
    width: 300,
  },
  responseOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  optionText: {
    marginLeft: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    height: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  plusButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default StrongProspect;
