import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#262626',
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
  },
  title: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
  },
  image: {
    width: 15,
    height: 20,
    margin: 6,
  },
  button: {},
  circle: {
    borderColor: '#4EA8DE',
    borderWidth: 1,
    width: 20,
    height: 20,
    marginRight: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {},
});
