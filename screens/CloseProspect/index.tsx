/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Popover from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const closeProspects = [
  {
    name: 'jay',
  },
  {
    name: 'Raj',
  },
];

const CloseProspect = () => {
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const showPopover = () => {
    setPopoverVisible(true);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
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

  const renderProspectRow = ({item}: any) => (
    <View style={styles.tableRow}>
      <Text>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        {selectedOption === 'Demo Done' && (
          <Text style={styles.optionTag}>DD</Text>
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
      <Text style={styles.header}>Close Prospect List</Text>
      <FlatList
        data={closeProspects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProspectRow}
      />

      <Popover isVisible={popoverVisible} onRequestClose={hidePopover}>
        {popoverContent}
      </Popover>
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
});

export default CloseProspect;
