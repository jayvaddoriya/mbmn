/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';

interface Prospect {
  name: string;
  mobileNumber: string;
}

const AllProspect = () => {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [name, setName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [detailPopoverVisible, setDetailPopoverVisible] =
    useState<boolean>(false);
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(
    null,
  );
  const [searchText, setSearchText] = useState<string>('');
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const addProspect = () => {
    const newProspect: Prospect = {name, mobileNumber};
    setProspects([...prospects, newProspect]);
    setName('');
    setMobileNumber('');
  };

  const detailPopoverShow = (item: any) => {
    setSelectedProspect(item);
    setDetailPopoverVisible(true);
  };

  const showPopover = () => {
    setPopoverVisible(true);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchText('');
  };

  const renderProspectRow = ({item}: {item: Prospect}) => (
    <View style={styles.tableRow}>
      <Text>{item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        {selectedOption === 'Strong Prospect' && (
          <Text style={styles.optionTag}>SP</Text>
        )}
        {selectedOption === 'Close Prospect' && (
          <Text style={styles.optionTag}>CP</Text>
        )}
        {selectedOption === 'Related Prospect' && (
          <Text style={styles.optionTag}>RP</Text>
        )}
        {selectedOption === 'Unknown Prospect' && (
          <Text style={styles.optionTag}>UP</Text>
        )}

        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => detailPopoverShow(item)}>
          <Icon name="eye" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={showPopover}>
          <Icon name="ellipsis-v" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const popoverContent = (
    <View style={styles.popoverContent}>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('Strong Prospect');
          hidePopover();
        }}>
        <Text>Strong Prospect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('Close Prospect');
          hidePopover();
        }}>
        <Text>Close Prospect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('Related Prospect');
          hidePopover();
        }}>
        <Text>Related Prospect</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.popoverItem}
        onPress={() => {
          handleSelectOption('Unknown Prospect');
          hidePopover();
        }}>
        <Text>Unknown Prospect</Text>
      </TouchableOpacity>
    </View>
  );

  const isInputEmpty = () => {
    return !name.trim() || !mobileNumber.trim();
  };

  const filteredProspects = searchText
    ? prospects.filter(prospect =>
        prospect.name.toLowerCase().includes(searchText.toLowerCase()),
      )
    : prospects;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!isSearchVisible ? (
          <TouchableOpacity onPress={toggleSearch}>
            <Icon name="search" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={toggleSearch}>
              <Icon name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Add Prospect</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="numeric"
        />
        <Button
          title="Add Prospect"
          onPress={addProspect}
          disabled={isInputEmpty()}
        />
      </View>

      <View style={styles.tableContainer}>
        <Text style={styles.sectionTitle}>Prospect List</Text>
        {filteredProspects.length === 0 ? (
          <Text>No data found</Text>
        ) : (
          <FlatList
            data={filteredProspects}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderProspectRow}
          />
        )}
      </View>

      <Popover isVisible={popoverVisible} onRequestClose={hidePopover}>
        {popoverContent}
      </Popover>

      {/* Modal to display prospect details */}
      <Popover
        isVisible={detailPopoverVisible}
        onRequestClose={() => setDetailPopoverVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Prospect Details</Text>
          <Text>Name: {selectedProspect?.name}</Text>
          <Text>Mobile Number: {selectedProspect?.mobileNumber}</Text>
          <View style={{marginTop: 10}}>
            <Button
              title="Close"
              onPress={() => {
                setSelectedProspect(null);
                setDetailPopoverVisible(false);
              }}
            />
          </View>
        </View>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  tableContainer: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionTag: {
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  popoverContent: {
    padding: 10,
  },
  popoverItem: {
    paddingVertical: 8,
  },
});

export default AllProspect;
