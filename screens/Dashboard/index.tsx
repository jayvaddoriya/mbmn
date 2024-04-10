/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dashboard = ({navigation}: any) => {
  const [isProspectExpanded, setIsProspectExpanded] = useState(true);
  const [isDemoExpanded, setIsDemoExpanded] = useState(false);
  const [isFollowUpExpanded, setIsFollowUpExpanded] = useState(false);
  const [isDistributorExpanded, setIsDistributorExpanded] = useState(false);
  const [isToDoListExpanded, setIsToDoListExpanded] = useState(false);
  const [isGoalListExpanded, setIsGoalListExpanded] = useState(false);

  const toggleProspectSection = () => {
    setIsProspectExpanded(!isProspectExpanded);
  };

  const toggleDemoSection = () => {
    setIsDemoExpanded(!isDemoExpanded);
  };

  const toggleDistributorSection = () => {
    setIsDistributorExpanded(!isDistributorExpanded);
  };

  const toggleFollowUpSection = () => {
    setIsFollowUpExpanded(!isFollowUpExpanded);
  };

  const toggleToDoListSection = () => {
    setIsToDoListExpanded(!isToDoListExpanded);
  };

  const toggleGoalListSection = () => {
    setIsGoalListExpanded(!isGoalListExpanded);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={toggleProspectSection}
        style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Prospect</Text>
        <Icon
          name={isProspectExpanded ? 'caret-up' : 'caret-down'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {isProspectExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('AllProspect')}>
            <Text>All prospect [Add new]</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('StrongProspect')}>
            <Text>Strong prospect</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('CloseProspect')}>
            <Text>Close prospect</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('RelatedProspect')}>
            <Text>Related prospect</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('UnknownProspect')}>
            <Text>Unknown prospect</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        onPress={toggleDemoSection}
        style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Demo</Text>
        <Icon
          name={isDemoExpanded ? 'caret-up' : 'caret-down'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {isDemoExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.item}>
            <Text>Demo</Text>
            <Text>TOTAL: 200</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        onPress={toggleFollowUpSection}
        style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Follow-up</Text>
        <Icon
          name={isFollowUpExpanded ? 'caret-up' : 'caret-down'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {isFollowUpExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.item}>
            <Text>Follow-up</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        onPress={toggleDistributorSection}
        style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Distributor</Text>
        <Icon
          name={isDistributorExpanded ? 'caret-up' : 'caret-down'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {isDistributorExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.item}>
            <Text>All distributor</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text>Active distributor</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Text>Non-Active distributor</Text>
            <Text>TOTAL: 5000</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        onPress={toggleToDoListSection}
        style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>To do list</Text>
        <Icon
          name={isToDoListExpanded ? 'caret-up' : 'caret-down'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {isToDoListExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.item}>
            <Text>To do list</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        onPress={toggleGoalListSection}
        style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Goal list</Text>
        <Icon
          name={isGoalListExpanded ? 'caret-up' : 'caret-down'}
          size={20}
          color="black"
        />
      </TouchableOpacity>
      {isGoalListExpanded && (
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.item}>
            <Text>Goal list</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default Dashboard;
