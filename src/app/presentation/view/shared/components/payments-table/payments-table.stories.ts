import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { PaymentsTableComponent } from './payments-table.component';
import { faker } from '@faker-js/faker';
import { SharedModule } from '../../shared.module';

export default {
    title: 'Components/PaymentsTable',
    component: PaymentsTableComponent,
    decorators: [
        moduleMetadata({
            imports: [ SharedModule ]
        })
    ]
} as Meta;

const Template: Story = (args: any) => ({
    props: {
        payments: args.data,
        pageSize: args.pageSize,
        pageNumber: args.pageNumber,
    },
});

const payments = [];
for (let i = 0; i < 20; i += 1) {
    payments.push({
        id: faker.datatype.id(),
        user: {
            id: faker.datatype.id(),
            name: faker.name.firstName(),
            nick: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            title: faker.name.jobTitle(),
        },
        value: faker.finance.amount(),
        date: faker.datatype.datetime(),
        status: faker.datatype.boolean(),
    });
}

export const Default = Template.bind({});
Default.args = {
    data: payments
};

export const Empty = Template.bind({});
Empty.args = {
    data: []
};