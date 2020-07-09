<template>
    <div class="steps-form col-container" id="steps-form">
        <div class="steps-progress row-container">
            <span
                :class="['step', { active: index === activeStep }]"
                v-for="(step, index) in formSteps"
                :key="'step' + index"
            >
                {{ index + 1 }}
            </span>
        </div>

        <form class="step-form" name="step-form" action="">
            <h2>{{ formSteps[activeStep].title }}</h2>
            <div class="input-fields">
                <div class="inputs-container" v-if="activeStep !== 2">
                    <div
                        class="radio-wrapper"
                        v-for="(field, index) in formSteps[activeStep].fields"
                        :key="'field' + index"
                    >
                        <label class="input-label" :for="field.code">{{ field.name }}</label>
                        <input
                            class="input-field"
                            :id="field.code"
                            :type="field.type"
                            :name="field.code"
                            :value="field.code"
                            v-model="formSteps[activeStep].value"
                        />
                    </div>
                </div>
                <div class="inputs-container" v-else>
                    <div class="text-wrapper">
                        <label class="input-label" :for="formSteps[activeStep].fields[0].code">{{
                            formSteps[activeStep].fields[0].name
                        }}</label>
                        <input
                            class="input-field"
                            :id="formSteps[activeStep].fields[0].code"
                            :type="formSteps[activeStep].fields[0].type"
                            :name="formSteps[activeStep].fields[0].code"
                            :value="formSteps[activeStep].fields[0].code"
                            v-model="formSteps[activeStep].value.name"
                            autocomplete="off"
                        />
                        <label class="input-label" :for="formSteps[activeStep].fields[1].code">{{
                            formSteps[activeStep].fields[1].name
                        }}</label>
                        <input
                            class="input-field"
                            :id="formSteps[activeStep].fields[1].code"
                            :type="formSteps[activeStep].fields[1].type"
                            :name="formSteps[activeStep].fields[1].code"
                            :value="formSteps[activeStep].fields[1].code"
                            v-model="formSteps[activeStep].value.phone"
                            autocomplete="off"
                        />
                    </div>
                </div>
            </div>
            <div class="actions">
                <button pre v-if="activeStep + 1 < formSteps.length - 1" @click.prevent="checkFields">next</button>
                <button v-if="activeStep + 1 === formSteps.length - 1" @click.prevent="checkFields">done</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'StepForm',
    data: function () {
        return {
            activeStep: 0,
            formSteps: [
                {
                    title: 'Вибір чашки',
                    code: 'chose-cup',
                    value: '',
                    fields: [
                        {
                            type: 'radio',
                            id: 111101,
                            code: 'small',
                            name: 'Мала',
                            composition: ['1 чашка'],
                            image: '/cups/small.png',
                            price: 1,
                            available: true,
                        },
                        {
                            type: 'radio',
                            id: 111102,
                            code: 'medium',
                            name: 'Середня',
                            composition: ['1,5 чашки'],
                            image: '/cups/medium.png',
                            price: 1.5,
                            available: true,
                        },
                        {
                            type: 'radio',
                            id: 111103,
                            code: 'big',
                            name: 'Велика',
                            composition: ['2 чашки'],
                            image: '/cups/big.png',
                            price: 2,
                            available: true,
                        },
                    ],
                },
                {
                    title: 'Кількість пакетиків цукру',
                    code: 'count-sugar',
                    value: '',
                    fields: [
                        {
                            type: 'radio',
                            id: 111001,
                            code: 1,
                            name: '1',
                            composition: [],
                            image: '',
                            price: 1,
                            available: true,
                        },
                        {
                            type: 'radio',
                            id: 111002,
                            code: 2,
                            name: '2',
                            composition: [],
                            image: '',
                            price: 1,
                            available: true,
                        },
                        {
                            type: 'radio',
                            id: 111003,
                            code: 3,
                            name: '3',
                            composition: [],
                            image: '',
                            price: 1,
                            available: true,
                        },
                    ],
                },
                {
                    title: 'Особисті дані',
                    code: 'person_data',
                    value: { name: '', phone: '' },
                    fields: [
                        {
                            type: 'text',
                            code: 'person_name',
                            name: "Ім'я",
                        },
                        {
                            type: 'text',
                            code: 'person_phone',
                            name: 'Номер телефону',
                        },
                    ],
                },
                {
                    title: 'Дякуємо за замовлення!',
                },
            ],
        };
    },
    methods: {
        nextStep() {
            setTimeout(() => {
                this.activeStep += 1;
            }, 600);
        },
        checkFields() {
            let valid = true;

            if (typeof this.formSteps[this.activeStep].value === 'object') {
                console.log(this.formSteps[this.activeStep].value.name, this.formSteps[this.activeStep].value.phone);
            } else {
                console.log(this.formSteps[this.activeStep].value);
            }

            if (valid) {
                this.nextStep();
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
