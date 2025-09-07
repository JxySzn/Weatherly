import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const index = () => {
  return (
    <SafeAreaView className="flex-1 items-center pt-36 bg-[#F9FAFC]">
      {/* weather report */}
      <View>
        <Badge className='h-8 mx-10 bg-secondary'>
          <Text className='text-primary'>Partly Cloudy</Text>
        </Badge>
        <Text className='text-9xl justify-center text-center'>22°</Text>
        <View className="flex-row space-x-5 justify-center">
          <Text className='text-lg'>H:24</Text>
          <Text className='text-lg'>L:18</Text>
        </View>
      </View>

      {/* Daily Data */}
      <View>
        <Text>index</Text>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Today's Details</CardTitle>
            <Separator />
            <CardContent>
              <Text className="font-black text-primary">index</Text>
            </CardContent>
          </CardHeader>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default index;
