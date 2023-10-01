import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#00C49F', '#FF444A']; // New colors

const Statistic = () => {
    const [donateData, setDonateData] = useState([]);

    useEffect(() => {

        const donateItem = JSON.parse(localStorage.getItem('donate'));
        if (donateItem) {
            const totalValue = donateItem.reduce((preValue, currentItem) => preValue + currentItem.Price, 0);
            setDonateData(totalValue);
        }else{
            setDonateData("No Statistic Yet");
        }

    }, []);

    const totalPrice = 25 + 30 + 25 + 50 + 20 + 35 + 15 + 40 + 30 + 25 + 20 + 45;

    const [data, setData] = useState([
        { name: 'Donated', value: 0 },
        { name: 'Remaining', value: 100 },
    ]);

    const updateChartData = () => {
        const percentageDonated = ((donateData * 100) / totalPrice).toFixed(2);
        const percentageRemaining = (100 - percentageDonated).toFixed(2);

        setData([
            { name: 'Donated', value: parseFloat(percentageDonated) },
            { name: 'Remaining', value: parseFloat(percentageRemaining) },
        ]);
    };

    useEffect(() => {
        updateChartData();
    }, [donateData]);

    return (
        <div>
            <h2 className='flex justify-center items-center my-10 text-4xl font-semibold'>Statistic</h2>

            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(2)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistic;
