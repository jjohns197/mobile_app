import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="lets-eat"
        options={{
          title: "Let's Eat",
          tabBarLabel: "Let's Eat",
        }}
      />
      <Tabs.Screen
        name="food-quotes"
        options={{
          title: 'Food Quotes',
          tabBarLabel: 'Food Quotes',
        }}
      />
      <Tabs.Screen
        name="contact-me"
        options={{
          title: 'Contact Me',
          tabBarLabel: 'Contact Me',
        }}
      />
    </Tabs>
  );
}
