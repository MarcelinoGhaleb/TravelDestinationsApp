import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#001226',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  settingsButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8292FC',
  },
  header: {
    backgroundColor: '#BBC0FF',
  },
  headerText: {
    color: '#001226',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#013287',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  languageOptions: {
    flexDirection: 'row',
  },
  languageOption: {
    marginRight: 10,
    color: '#1348E8',
  },
  selectedLanguage: {
    marginRight: 10,
    fontWeight: 'bold',
    color: '#496AF5', 
  },
  button: {
    backgroundColor: '#1348E8',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#8292FC',
  },
  placeButton: {
    backgroundColor: '#8292FC',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  placeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
